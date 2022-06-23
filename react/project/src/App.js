import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const post = '강남 우동 맛집';
  const [글제목, 글제목변경] = useState(['신사', '방배', '강남']);

  const [like, likeCount] = useState([5, 3, 2]);
  const [contant, contantHide] = useState(false);
  const [title, setTitle] = useState(0);
  const [input, setInput] = useState('');

  function sort() {
    const copy = [...글제목];
    copy.sort();
    글제목변경(copy);
  }

  function genderChaninge() {
    const copy = [...글제목];
    copy[0] = '여자코트추천';
    글제목변경(copy);
    console.log(글제목);
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>PROJECT</h4>
      </div>
      <button onClick={sort}>가나다순</button>
      <button onClick={genderChaninge}>변경 버튼</button>

      {/* <div className='list'>
        <h4>{글제목1[1]} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4
          onClick={() => {
            contantHide(!contant);
          }}
        >
          {글제목1[2]}{' '}
        </h4>
        <p>2월 17일 발행</p>
      </div>
       */}

      {글제목.map((a, i) => {
        return (
          <div className='list' key={i}>
            <h4
              className='title'
              onClick={() => {
                contantHide(!contant);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  const copy = [...like];
                  copy[i] = copy[i] + 1;
                  likeCount(copy);
                }}
              >
                🤍
              </span>
              {like[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                const copy = [...글제목];
                copy.splice(i, 1);
                console.log(copy);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          if (e.target.value === 'null') {
            return;
          } else {
            setInput(e.target.value);
          }
        }}
      ></input>
      <button
        onClick={() => {
          if (input !== '') {
            const copy = [...글제목];
            copy.unshift(input);
            console.log(input.value);
            console.log(input);
            글제목변경(copy);
          } else {
            return;
          }
        }}
      >
        글쓰기
      </button>

      {contant == true ? (
        <Contant TitleChange={genderChaninge} 글제목={글제목} title={title} />
      ) : null}
    </div>
  );
}

function Contant(props) {
  return (
    <div className='modal'>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
