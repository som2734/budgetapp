import message from './message';
import axios from 'axios';
import './index.scss';

const Url = 'http://localhost:3000/Transactions';
axios.get(Url)
.then((data) => {
  console.log(data.data);
  displayJSON(data.data);
}).catch(err=> console.log(err));

function displayJSON(jsonData){
  const div = document.createElement('div');
  div.classList.add('transactions');
  let innerDiv = "";
  for(let i = 0; i < jsonData.length; i++){
    innerDiv = document.createElement('div');
    innerDiv.classList.add('transaction-wrap');
    for(let e in jsonData[i]){
      const paragraph = document.createElement('p');
      paragraph.innerHTML = "<b>"+e+":</b> "+jsonData[i][e];
      innerDiv.append(paragraph);
    }
    div.append(innerDiv);
  }
  document.body.append(div);
}

function getTotal(jsonData){
  const div = document.createElement('div');

}
