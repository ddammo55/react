import './App.css';
import Board from './components/Board';
import Profile from './components/Profile';

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됨!')
  }
  return (
   <> 
      <button onClick={handleClick}>버튼</button>

      <button onClick={(event) => {
        console.log('버튼눌렸음');
      }}>
        버튼2
      </button>
      <Profile image='https://images.unsplash.com/photo-1676362538914-2ad56547dae5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' name='James Kim' title='프론트엔드 개발자' isNew={true}/>
      <Profile image='https://images.unsplash.com/photo-1675788555085-d244c05f1d10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' name='juri' title='프론트엔드 개발자'/>
      <Profile image='https://images.unsplash.com/photo-1676302225279-12bbabdf5110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' name='wan' title='프론트엔드 개발자'/>
      <Board boardName="SCM-H1"/>
   </>
  );
}
    
export default AppProfile;
