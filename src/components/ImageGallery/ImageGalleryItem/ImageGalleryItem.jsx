import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from '../../Modal/Modal';
import { GalleryItem, ImageGalleryItemImage } from './GalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tag, largeImageURL }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <GalleryItem onClick={toggleModal}>
        <ImageGalleryItemImage src={webformatURL} alt={tag} />
      </GalleryItem>
      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} tag={tag} />
      )}
    </>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tag: PropTypes.string,
};
