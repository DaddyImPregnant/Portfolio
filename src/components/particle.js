import Cookies from "js-cookie";
import Particles from "react-tsparticles";

function Background() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
	    <Particles url='../assets/particles.json' />
    );
}

export default Background;