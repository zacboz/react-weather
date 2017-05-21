var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-center page-title'>Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ul>
        <li>
          <Link to='/?location=Seattle'>Seattle, WA</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, UK</Link>
        </li>
      </ul>
    </div>
  )
};

module.exports = Examples;
