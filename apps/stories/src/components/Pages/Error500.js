import React from 'react';

const Error500 = (props) => (
  <div className="abs-center wd-xl">
    <div className="text-center mb-4">
      <div className="mb-3">
        <em className="fa fa-wrench fa-5x text-muted"></em>
      </div>
      <div className="text-lg mb-3">500</div>
      <p className="lead m-0">Oh! Something went wrong :(</p>
      <p>Don't worry, we're now checking this.</p>
      <p>
        In the meantime, please try one of those links below or come back in a
        moment
      </p>
    </div>
    <ul className="list-inline text-center text-sm mb-4">
      <li className="list-inline-item">
        <a href="/" className="text-muted">
          Go to App
        </a>
      </li>
      <li className="text-muted list-inline-item">|</li>
      <li className="list-inline-item">
        <a href="/" className="text-muted">
          Login
        </a>
      </li>
    </ul>
    <div className="p-3 text-center">
      <span className="mr-2">&copy;</span>
      <span>2020</span>
      <span className="mx-2">-</span>
      <span>TruStories</span>
      <br />
      <span>Automated Sales Development</span>
    </div>
  </div>
);

export default Error500;
