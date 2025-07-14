import React from 'react';
import Image from 'next/image';

const Hearts = ({ className, width, height }) => {
  return (
    <div className={className}>
      <Image
        src="/Heart.svg"
        alt="heart"
        width={width}
        height={height}
        className="z-20"
      />
    </div>
  );
};

export { Hearts };

const Leafs = ({ className, width, height }) => {
  return (
    <div className={className}>
      <Image
        src="/Leafs.svg"
        alt="leaf"
        width={width}
        height={height}
        className="z-20"
      />
    </div>
  );
};

export { Leafs };

const Cloud1 = ({ className, width, height }) => {
  return (
    <div className={className}>
      <Image
        src="/Cloud1.svg"
        alt="clouds"
        width={width}
        height={height}
        className=""
      />
    </div>
  );
};

export { Cloud1 };

const Cloud2 = ({ className, width, height }) => {
  return (
    <div className={className}>
      <Image
        src="/Cloud2.svg"
        alt="clouds"
        width={width}
        height={height}
        className=""
      />
    </div>
  );
};

export { Cloud2 };

const Cloud3 = ({ className, width, height }) => {
  return (
    <div className={className}>
      <Image
        src="/Cloud3.svg"
        alt="clouds"
        width={width}
        height={height}
        className=""
      />
    </div>
  );
};

export { Cloud3 };

const ConversationBubbles = ({ className, width, height }) => {
  return (
    <div className={className}>
      <Image
        src="/ConversationBubbles.svg"
        alt="conversation"
        width={width}
        height={height}
        className=""
      />
    </div>
  );
};

export { ConversationBubbles };
