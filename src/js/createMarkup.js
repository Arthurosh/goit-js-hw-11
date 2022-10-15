export function createMarkup(photos) {
  return photos
    .map(img => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = img;
      return `
      <li class="gallery-item">
        <div class="photo-card">
          <a class="card-link" href="${largeImageURL}">
            <img class="card-img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Likes</b>${likes}</p>
              <p class="info-item"><b>Views</b>${views}</p>
              <p class="info-item"><b>Comments</b>${comments}</p>
              <p class="info-item"><b>Downloads</b>${downloads}</p>
            </div>
          </a>
        </div>
      </li>`;
    })
    .join('');
}
