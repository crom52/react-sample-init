import { useLocation } from 'react-router-dom';

function Action() {
  const location = useLocation();
  if (!location || !location.hash.includes('menu_no=1&menu_id=3')) {
    return;
  }
  return (
    <div>
      <h2>Action</h2>
      <form>
        <label>
          Enter your name:
          <input type='text' />
        </label>
      </form>
    </div>
  );
}

export default Action;
