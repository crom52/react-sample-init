import { Link } from 'react-router-dom';

function Action() {
  return (
    <div>
      <h2>Action</h2>
      <form>
        <label>
          Enter your name:
          <input type='text' />
        </label>
      </form>
      <Link to='/MENU_001'>Go back to MENU_001</Link>
    </div>
  );
}

export default Action;
