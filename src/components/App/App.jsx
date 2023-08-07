import { useState, useEffect } from "react";
import { Container } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { getPhoto } from 'Api';
import Notiflix from 'notiflix';

export const App =() => {
  const[tag, setTag]= useState('');
  const[image,setImage]= useState([]);
  const[currentPage, setCurrentPage] = useState(1);
  const[isLoad, setIsLoading] = useState(false);
  const[isBtn, setIsButton] = useState(false);
  const[isError, setIsError] = useState(false);

  const formSubmit = data => {
    if (data === tag) {
      return;
    }
    setTag(data);
    setImage([]);
    setCurrentPage(1);
  };

 useEffect(()=>{
    setIsLoading(true);
    getPhoto(tag, currentPage)
      .then(r => {  
        if (r.hits.length === 0) {
          Notiflix.Notify.failure('Sorry, there are no images matching your search query.');
          return;
        }

        setImage([...image, ...r.hits]);
        setIsButton(currentPage < Math.ceil(r.totalHits / 12))
        }   
      )
      .catch(error => setIsError(true, error))
      .finally(() =>setIsLoading(false));
 },[tag, currentPage]); 

  const loadMoreImages = () => {
    setCurrentPage(currentPage + 1)
  }
   const arrayLength = image.length; 
    return (
      <Container>        
        <Searchbar onSubmit={formSubmit} />
        {(arrayLength!==0||isError ) && <ImageGallery images={image} />}  
        {isLoad && <Loader/>}      
        {!isLoad && (isBtn && <Button onClick={loadMoreImages } />)}
      </Container>
    );
  } 
