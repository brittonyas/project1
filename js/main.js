
$('#myAffix').affix({
  offset: {
    top: 100,
    bottom: function () {
      return (this.bottom = $('.footer').outerHeight(true))
    }
  }
})

$('#myAffix').affix({
  offset: 15
})

$('#myAffix').affix('checkPosition')