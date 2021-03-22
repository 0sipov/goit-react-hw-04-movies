import React, { Component } from 'react';
import Searchbar from '../Searchbar';
import ImageGallery from '../ImageGallery';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../Modal';
import Button from '../Button';
import PreLoader from '../Loader';
import './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import getImgs from '../../utilites/fetch';
import uniqid from 'uniqid';

class App extends Component {
  state = {
    imgs: [],
    page: 1,
    perPage: 6,
    isModalOpen: false,
    isButtonVisible: false,
    isPreLoader: false,
    modalImg: '',
    query: '',
  };

  handleSwitchModal = imgId => {
    if (!this.state.isModalOpen) {
      this.setState({
        modalImg: this.state.imgs.find(el => {
          return +el.id === +imgId;
        }),
      });
      this.setState({ isModalOpen: !this.state.isModalOpen });
    } else {
      this.setState({ isModalOpen: !this.state.isModalOpen });
    }
  };

  isLastPage = totalHits => {
    const { page, perPage } = this.state;
    return totalHits / (perPage * (page + 1)) <= 1;
  };

  handleFetchQuery = async query => {
    this.setState({ isPreLoader: true });
    if (query === '') {
      toast.error('Enter the query');
    } else {
      this.setState({
        query: query,
        page: 1,
        isPreLoader: false,
        imgs: await getImgs(query, this.state.page, this.state.perPage)
          .then(response => {
            this.setState({
              isButtonVisible: !this.isLastPage(response.data.totalHits),
            });
            return response.data.hits;
          })
          .catch(err => {
            console.log(err);
            return err;
          }),
      });
    }
  };

  handleAddQuery = () => {
    const { query, page, perPage } = this.state;
    this.setState({ isPreLoader: true });
    getImgs(query, page + 1, perPage)
      .then(response => {
        this.setState({
          isButtonVisible: !this.isLastPage(response.data.totalHits),
        });
        return response.data.hits;
      })
      .then(r => {
        this.setState(preState => ({
          imgs: [...preState.imgs, ...r],
          page: preState.page + 1,
          isPreLoader: false,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  };

  render() {
    const { handleFetchQuery, handleSwitchModal, handleAddQuery } = this;
    const {
      imgs,
      isModalOpen,
      isButtonVisible,
      isPreLoader,
      modalImg,
    } = this.state;
    return (
      <>
        <Searchbar onFetchQuery={handleFetchQuery} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        <ImageGallery>
          {imgs.map(el => {
            return (
              <ImageGalleryItem
                src={el.webformatURL}
                alt={el.tags}
                key={uniqid()}
                id={el.id}
                onSwitchModal={handleSwitchModal}
              />
            );
          })}
        </ImageGallery>
        {isButtonVisible && <Button onAddQuery={handleAddQuery} />}
        <Modal
          isOpen={isModalOpen}
          onSwitchModal={handleSwitchModal}
          src={modalImg.largeImageURL}
          alt={modalImg.tags}
        />
        {isPreLoader && <PreLoader />}
      </>
    );
  }
}

export default App;
