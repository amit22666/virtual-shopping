function loadPosts() {
  $.get('/api/posts', (posts) => {
    for (let p of posts) {
      $('#posts-container').append(
        $(`
        <div class="col-4">
          <div class="card m-2">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Shop address : ${p.body}</h6>
              <h6 class="card-subtitle mb-2 text-muted">Owner : ${p.user.username}</h6>
              <h8 class="card-subtitle mb-2 text-muted">Open time ${p.opentime}:00 AM</h8>
              <h8 class="card-subtitle mb-2 text-muted">Close time ${p.closetime}:00 PM</h8>
              <p class="card-text">
                
                Average time per cutomers : ${p.timepercustomer} min
        
              </p>

              <p>
              <h8 class="card-subtitle mb-2 text-muted">Shoppers in line ${p.queuelength} customers</h8>
              </p>
              <a id = 'jq' href="http://localhost:8483/api/posts/comments/${p.id}/endpoint" class="card-link">Join Queue</a>
              
            </div>
          </div>
        </div>
        
        `)
      )
    }
  })
}
