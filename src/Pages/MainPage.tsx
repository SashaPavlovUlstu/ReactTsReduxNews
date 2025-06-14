import '../styles/App.scss'
import Header from '../components/Header/Header.tsx';
import HotTopicSection from '../components/HotTopicsSection/HotTopicSection.tsx';
import NewsList from '../components/NewsList/NewsList.tsx';
import Copyright from '../components/Copyright/Copyright.tsx';
import { useEffect, useState } from 'react';

function MainPage() {
  const [searchValue, setSearchValue] = useState<string>('tesla');
  const [debouncedSearchValue, setDebouncedSearchValue] = useState<string>('tesla');

  useEffect(() => {
    const timerId = setTimeout(()=>{
      setDebouncedSearchValue(searchValue);
    },500)
    return () =>{
      clearTimeout(timerId);
    }
  },[searchValue])
  return (
    <div>
      <Header searchValue={searchValue} onChange={setSearchValue}/>
      <HotTopicSection/>
      <NewsList debouncedSearchValue={debouncedSearchValue}  />
      <Copyright/>
    </div>
  )
}

export default MainPage
