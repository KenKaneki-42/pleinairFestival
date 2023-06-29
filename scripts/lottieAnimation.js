// can add a path and the ID in params if several lotties
export function loadLottie() {
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../../assets/lotties/panda-eats-popcorn.json' // Set your path to the animation JSON
  });
}
