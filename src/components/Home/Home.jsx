import React from 'react';


function Home (){
  return (
    <div className='hero'>
      <section id="hero">
        <h1>The Importance of Web Development</h1>
        <p>
          Web development is the process of creating websites that allow users to view and interact with content over the Internet.
          It includes many different aspects, including the creation of a website’s design and code to create a functioning website.
          In this blog post, we look at the importance of web development.
        </p>
        <a
          href="https://www.bing.com/search?q=The+Importance+of+Web+Development&qs=n&form=QBRE&sp=-1&lq=0&pq=the+importance+of+web+development&sc=7-33&sk=&cvid=AEA65B84E28E4C42BD44C18029320E47&ghsh=0&ghacc=0&ghpl="
          target="_blank" 
          rel="noreferrer" // Added for security
        >
          Click Here to Learn More
        </a>
      </section>
    </div>
  );
}

export default Home;
