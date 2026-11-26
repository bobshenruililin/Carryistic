import plates from './plates.json';
import './collection.css';

const plateIndex = new Map(plates.map((plate, index) => [plate.id, index]));
const works = new Map();
for (const [index, plate] of plates.entries()) {
  if (!works.has(plate.postId)) works.set(plate.postId, { first: index, slides: [] });
  works.get(plate.postId).slides.push(plate);
}

function linkFor(id) {
  return '#work-' + id;
}

function linkedIndex() {
  const id = window.location.hash.match(/^#work-(P\d{2}-\d{2})$/)?.[1];
  return plateIndex.get(id);
}

export function mountCollection(root, { asset, onlineBase }) {
  if (!root || !plates.length) return;
  root.innerHTML = `
    <div class="collection-layout">
      <nav class="collection-index" aria-label="Choose an artwork">
        <button class="collection-skip" type="button">Go to the current artwork</button>
        <div class="collection-index-head" aria-hidden="true"><span>Work</span><span>Slides</span></div>
        <ol class="collection-works"></ol>
        <label class="collection-mobile-picker"><span>Work</span><select aria-label="Choose an artwork"></select></label>
      </nav>
      <figure class="collection-view" aria-labelledby="collection-title">
        <div class="collection-stage" role="group" tabindex="0" aria-label="Artwork viewer. Use the left and right arrow keys to change slides." aria-keyshortcuts="ArrowLeft ArrowRight"></div>
        <figcaption class="collection-caption">
          <div class="collection-tools">
            <div class="collection-position">
              <a class="collection-id" aria-label="Link to this slide"></a>
              <select class="collection-slide-picker" aria-label="Choose a slide"></select>
            </div>
            <div class="collection-step">
              <button type="button" data-step="-1" aria-label="Previous slide"><span aria-hidden="true">←</span> Prev</button>
              <button type="button" data-step="1" aria-label="Next slide">Next <span aria-hidden="true">→</span></button>
            </div>
          </div>
          <h3 class="collection-title" id="collection-title"></h3>
          <p class="collection-observation" id="collection-observation"></p>
          <details class="collection-sources">
            <summary>Credits &amp; source</summary>
            <p class="collection-credit"></p>
            <div class="collection-links">
              <a data-source="instagram" target="_blank" rel="noreferrer">Instagram post <span class="arrow" aria-hidden="true"></span></a>
              <a data-source="original" target="_blank" rel="noreferrer">Original file <span class="arrow" aria-hidden="true"></span></a>
            </div>
          </details>
        </figcaption>
      </figure>
      <span class="collection-announcement" role="status" aria-atomic="true"></span>
    </div>`;

  const get = selector => root.querySelector(selector);
  const viewer = get('.collection-view');
  const stage = get('.collection-stage');
  const title = get('.collection-title');
  const observation = get('.collection-observation');
  const credit = get('.collection-credit');
  const status = get('.collection-announcement');
  const idLink = get('.collection-id');
  const instagramLink = get('[data-source="instagram"]');
  const originalLink = get('[data-source="original"]');
  const previous = get('[data-step="-1"]');
  const next = get('[data-step="1"]');
  const workList = get('.collection-works');
  const workPicker = get('.collection-mobile-picker select');
  const slidePicker = get('.collection-slide-picker');
  const workLinks = new Map();
  let current = -1;

  function mediaUrl(name) {
    const path = 'plates/' + name;
    if (window.__carryFiles && !window.__carryFiles[path] && onlineBase) {
      return new URL(path, onlineBase.replace(/\/?$/, '/')).href;
    }
    return asset(path);
  }

  for (const [postId, { first, slides }] of works) {
    const count = slides.length;
    const workTitle = slides[0].title;
    const entry = document.createElement('li');
    const link = document.createElement('a');
    const number = document.createElement('span');
    const name = document.createElement('span');
    const total = document.createElement('span');
    number.className = 'collection-work-number';
    total.className = 'collection-work-count';
    number.textContent = postId.slice(1);
    name.textContent = workTitle;
    total.textContent = count;
    link.href = linkFor(slides[0].id);
    link.setAttribute('aria-label', workTitle + ', ' + count + (count === 1 ? ' slide' : ' slides'));
    link.append(number, name, total);
    entry.append(link);
    workList.append(entry);
    workPicker.add(new Option(workTitle + ' (' + count + ')', postId));
    workLinks.set(postId, link);
    link.addEventListener('click', event => {
      if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      navigate(first, true);
    });
  }

  function setSource(link, url) {
    link.hidden = !url;
    if (url) link.href = url;
    else link.removeAttribute('href');
  }

  function show(index, announce) {
    if (index === current || !plates[index]) return;
    const lastWork = plates[current]?.postId;
    current = index;
    const plate = plates[index];
    const group = works.get(plate.postId);
    const total = group.slides.length;

    if (lastWork !== plate.postId) {
      if (lastWork) workLinks.get(lastWork).removeAttribute('aria-current');
      workLinks.get(plate.postId).setAttribute('aria-current', 'true');
      workPicker.value = plate.postId;
      slidePicker.replaceChildren(...group.slides.map(slide => {
        const name = 'Slide ' + slide.slide + ' of ' + total + (slide.movie ? ' · video' : '');
        return new Option(name, slide.id);
      }));
    }
    slidePicker.value = plate.id;
    idLink.href = linkFor(plate.id);
    idLink.textContent = plate.id;
    idLink.setAttribute('aria-label', 'Link to slide ' + plate.id);
    title.textContent = plate.title;
    observation.textContent = plate.observation;
    credit.textContent = plate.credit || plate.sourceAccount;
    setSource(instagramLink, plate.instagramUrl);
    setSource(originalLink, plate.originalUrl);
    const focusedControl = document.activeElement;
    previous.disabled = index === 0;
    next.disabled = index === plates.length - 1;
    if (focusedControl === next && next.disabled) previous.focus({ preventScroll: true });
    if (focusedControl === previous && previous.disabled) next.focus({ preventScroll: true });

    const oldVideo = stage.querySelector('video');
    if (oldVideo) {
      oldVideo.pause();
      oldVideo.removeAttribute('src');
      oldVideo.load();
    }
    const media = document.createElement(plate.movie ? 'video' : 'img');
    const label = plate.title + ', slide ' + plate.slide + ' of ' + total;
    if (plate.movie) {
      media.controls = true;
      media.playsInline = true;
      media.preload = 'none';
      media.poster = mediaUrl(plate.filename);
      media.src = mediaUrl(plate.movie);
      media.setAttribute('aria-label', label + ', ' + Math.round(plate.duration) + '-second video');
    } else {
      media.alt = label;
      media.loading = announce ? 'eager' : 'lazy';
      media.decoding = 'async';
      media.src = mediaUrl(plate.filename);
    }
    media.width = plate.width;
    media.height = plate.height;
    media.style.setProperty('--collection-aspect', plate.width / plate.height);
    media.setAttribute('aria-describedby', observation.id);
    stage.replaceChildren(media);
    viewer.id = 'work-' + plate.id;
    if (announce) status.textContent = label;
  }

  function navigate(index, newEntry = false) {
    if (!plates[index]) return;
    const hash = linkFor(plates[index].id);
    if (window.location.hash !== hash) {
      const method = newEntry || linkedIndex() === undefined ? 'pushState' : 'replaceState';
      try {
        window.history[method](window.history.state, '', hash);
      } catch {
        window.location.hash = hash;
      }
    }
    show(index, true);
  }

  get('.collection-skip').addEventListener('click', () => stage.focus());
  workPicker.addEventListener('change', () => navigate(works.get(workPicker.value).first, true));
  slidePicker.addEventListener('change', () => navigate(plateIndex.get(slidePicker.value)));
  for (const button of [previous, next]) {
    button.addEventListener('click', () => navigate(current + Number(button.dataset.step)));
  }
  viewer.addEventListener('keydown', event => {
    if (event.defaultPrevented || event.isComposing || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) return;
    if (event.target.closest('a, select, input, textarea, video, summary')) return;
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    navigate(current + (event.key === 'ArrowLeft' ? -1 : 1));
  });

  function openLinkedSlide(announce) {
    const index = linkedIndex();
    if (index === undefined) return;
    show(index, announce);
    requestAnimationFrame(() => {
      if (linkedIndex() === index) root.scrollIntoView({ block: 'start', behavior: 'instant' });
    });
  }
  if (linkedIndex() === undefined) show(0, false);
  else openLinkedSlide(false);
  window.addEventListener('hashchange', () => openLinkedSlide(true));
}
