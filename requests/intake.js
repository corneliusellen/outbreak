const baseURL = require('./railsAPI').baseURL()

const intakeAPIFetch = (method, body) => {
  var token = localStorage.getItem('token');
  return fetch(`${baseURL}/api/v1/tags`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'Authorization': token},
    body: JSON.stringify(body)
  })
}

const postTags = (method, tags) => {
  var token = localStorage.getItem('token');
  var id = localStorage.getItem('questionnaire_id');
  return fetch(`${baseURL}/api/v1/questionnaires/${id}/intakes`, {
    method: `${method}`,
    headers: {'Content-Type': 'application/json', 'Tags': `${JSON.stringify(tags)}`, 'Authorization': token},
  })
}

const getTags = () => {
  intakeAPIFetch('GET')
  .then(response => handleResponse(response))
  .then(tags => appendEachSection(tags))
  .catch(error => console.error({ error }))
}

const appendEachSection = (sections) => {
  return sections.forEach(section => {
    appendTags(section)
  })
}

const appendTags = (section) => {
  section.tags.forEach(tag => {
    appendTag(tag, section.name)
  })
}

const appendTag = (tag, sectionName) => {
  if (tag.options.length == 0) {
    $(`.options.${sectionName}`).children().append(
      `<button class="fillbutton" type="button" value="${tag.id}" name="button">${tag.name}</button>`
    )
  } else {
    $(`.options.${sectionName}`).append(
      `<div class="category-box ${tag.name}"><p>${tag.name}</p></div>`
    )
    tag.options.forEach(option => {
      $(`.category-box.${tag.name}`).append(
        `<button class="fillbutton" type="button" value="${option.tag_id}" name="button">${option.name}</button>`
      )
    })
  }
}

const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusTest: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

module.exports = {
  getTags,
  postTags
}
