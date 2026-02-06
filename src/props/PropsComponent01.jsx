import React from 'react';

const PropsComponent01 = (props) => {
  console.log("props", props)
  props.printName()

  return (
    <div>
<<<<<<< HEAD
      <p>{props.name} 자식👶</p>
=======
      <p>{props.name}자식🤷‍♀️</p>
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
    </div>
  );
};

export default PropsComponent01;