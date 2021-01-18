$("#write-btn").click(() => {
  const userId = JSON.parse(window.localStorage.user).id
  const title = $("#p-title").val()
  const body = $("#p-body").val()
  const queuelength = $("#p-queuelength").val()
  const timepercustomer = $("#p-timepercustomer").val()
  const opentime = $("#p-opentime").val()
  const closetime = $("#p-closetime").val()

  $.post("/api/posts", { userId, title, body , queuelength , timepercustomer , opentime , closetime}, async (data) => {
     console.log(data)
    await $("#content").load("/components/my-posts.html")
    await $(".nav-item .active").removeClass("active")
    await $("[data-components='my-posts']").addClass("active")
  })
})
