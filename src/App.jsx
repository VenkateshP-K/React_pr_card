import './App.css';
import Card from './card'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
   let cardData =  [{
    title:"$0/Month",
    smtitle:"FREE",
    features :[
      {val:"single user",
       enabled : true},
    {val:"50GB storage",
    enabled : true},
    {val:"unlimited public projects",
    enabled : true},
    {val:"Community Access",
    enabled : true},
    {val:"Unlimited public projects",
    enabled : false},
    {val:"dedicated phone support",
    enabled : false},
    {val:"free subdomain",
    enabled : false},
    {val:"monthly status reports",
    enabled : false },]
   },
  {
  title:"$9/Month",
  smtitle:"PLUS",
  features : [
    {val:"5 users",
  enabled : true},
  {val:"50GB storage",
   enabled : true},
 {val:"unlimited public projects",
 enabled : true},
  {val:"Community Access",
  enabled : true},
  {val:"Unlimited public projects",
  enabled : true},
  {val:"dedicated phone support",
  enabled : true},
  {val:"free subdomain",
   enabled : true},
{val:"monthly status reports",
  enabled : false}]
  },
{
    title:"$49/Month",
    smtitle:"PRO",
    features : [
      {val:"single user",
      enabled : true},
    {val:"50GB storage",
    enabled : true},
    {val:"unlimited public projects",
    enabled : true},
    {val:"Community Access",
    enabled : true},
    {val:"Unlimited public projects",
    enabled : true},
    {val:"dedicated phone support",
    enabled : true},
    {val:"free subdomain",
    enabled : true},
    {val:"monthly status reports",
    enabled : true}]
}]
return (
  <div className="container">
    <div className="row">
      {cardData.map((item, index) => {
        return <Card item={item} key={index} />;
      })}
    </div>
  </div>
);
}


export default App;