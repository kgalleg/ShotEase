const remoteURL = "http://localhost:5002";
//The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

export default Object.create(null, {
  //get entry
  get: {
    value: function (resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json());
    }
    },
  //get all entries
  all: {
    value: function (resource) {
      return fetch(`${remoteURL}/${resource}`).then(e => e.json());
    }
  },

  //delete entry
  delete: {
    value: function (resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      }).then(e => e.json());
    }
  },

  //add entry
  post: {
    value: function (resource, newObject) {
      return fetch(`${remoteURL}/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newObject)
      }).then(data => data.json());
    }
  },

  removeAndList: {
    value: function (resource, id) {
      return fetch(`${remoteURL}/${resource}/${id}`, {
        method: "DELETE"
      })
        .then(e => e.json())
        .then(() => fetch(`${remoteURL}/${resource}`))
        .then(e => e.json());
    }
  },

  //edit entry
  put: {
    value: function (resource, editedThing) {
      return fetch(`${remoteURL}/${resource}/${editedThing.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(editedThing)
      }).then(data => data.json());
    }
  },
  addUser(obj) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    }).then(data => data.json())
  },
  // searchUP(username, password) {
  //   return fetch(
  //     `${remoteURL}/user?userName=${username}&password=${password}`
  //   ).then(e => e.json())
  // },
  // searchUsername(username) {
  //   return fetch(`${remoteURL}/user?userName=${username}`).then(e =>
  //     e.json()
  //   )
  // },
  getExpand(resource, expand) {
    return fetch(`${remoteURL}/${resource}?_expand=${expand}`).then(data => data.json());
  },

});




