function loadPostsComments() {
    let start, end
    start = (document.URL.search("comments/") + 9)
    end = document.URL.search("/endpoint")
    let id = parseInt(document.URL.slice(start, end))
    $.get('http://localhost:8483/api/posts/comments/' + id, (post) => {
      console.log("++++++++++++++++++")
      console.log(id)
      console.log("++++++++++++++++++")// working till here
      {
        $('#posts-container').append(
          $(`
            <div class="col-4">
              <div class="card m-2">
                <div class="card-body">
                  <h5 class="card-title" style="text-align: initial;">Shop name:${post[0].title}</h5>
                  
                  <p class="card-text" style="text-align: initial;">
                    Shop address: ${post[0].body}
                  </p>

                  <h6 class="card-subtitle mb-2 text-muted" style="text-align: initial;">Your queue number:${post[0].queuelength}</h6>
                  <h6 class="card-subtitle mb-2 text-muted" style="text-align: initial;">Your wait time:${post[0].timepercustomer} minutes</h6>
                  <h6 class="card-subtitle mb-2 text-muted" style="text-align: center;">WEAR MASK</h5>
                  <button onclick="window.print()">Print Receipt</button>
                  
                  
                </div>
              </div>
            </div>
            <br><br><h1><div class='col-4'>Reviews</div></h1>               
            
            `)
        )
      }
      for (let p of post[0].comments) {
        $('#posts-container').append(
          $(`
            
            <br>
            
              <div class="card">
      <div class="card-header">
        ${p.title}
      </div>
      <div class="card-body">
        <p class="card-text">${p.body}</p>
      
      </div>
    </div>
            
            
            `)
        )
      }
    })
  }