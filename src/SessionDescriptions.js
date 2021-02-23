import React from 'react';

function SessionDescriptions(props) {
  if (props.session === 1) {
    return (
      <div> 
        <p>It is a period of unrest and opportunity in the galaxy. The Galactic Empire struggles to maintain control in the midst of civil war. Meanwhile, scoundrels, smugglers, and fringers of all types scramble for a living on the edges of civilization. It is a hard life, but these renegades have more freedom and opportunity than any citizen of the Core Worlds.</p>
        <p>On the desert world of TATOOINE, a few such renegades have run afoul of a local crime boss, TEEMO THE HUTT. Trapped in the tiny spaceport of Mos Shuuta, the renegades have no choice but to steal a starship and flee Teemo's forces. Fortunately, a suitable starship has recently docked at the landing bay: a freighter called the KRAYT FANG, captained by a Trandoshan slaver named Trex. As they flee through the suns-baked streets, the renegades duck into the local cantina to hide from their pursuers...</p>
      </div>
    );
  } else {
    return null;
  }
}

export default SessionDescriptions;