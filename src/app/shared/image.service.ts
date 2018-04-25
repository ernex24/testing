import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
visibleImages = [];
  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id === id);
  }
}

const IMAGES = [
  { 'id': 1, 'category': 'boats', 'caption': 'View nature 1', 'url': 'https://placeimg.com/200/100/nature', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 2, 'category': 'boats', 'caption': 'View nature 2', 'url': 'https://placeimg.com/200/100/nature', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 3, 'category': 'boats', 'caption': 'View nature 3', 'url': 'https://placeimg.com/200/100/nature', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 4, 'category': 'boats', 'caption': 'View nature 4', 'url': 'https://placeimg.com/200/100/nature', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 5, 'category': 'camping', 'caption': 'View arch 1', 'url': 'https://placeimg.com/200/100/arch', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 6, 'category': 'camping', 'caption': 'View arch 2', 'url': 'https://placeimg.com/200/100/arch', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 7, 'category': 'camping', 'caption': 'View arch 3', 'url': 'https://placeimg.com/200/100/arch', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 8, 'category': 'camping', 'caption': 'View arch 4', 'url': 'https://placeimg.com/200/100/arch', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 9, 'category': 'camping', 'caption': 'View arch 5', 'url': 'https://placeimg.com/200/100/arch', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 10, 'category': 'cats', 'caption': 'View animals 1', 'url': 'https://placeimg.com/200/100/animals', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 11, 'category': 'cats', 'caption': 'View animals 2', 'url': 'https://placeimg.com/200/100/animals', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 12, 'category': 'cats', 'caption': 'View animals 3', 'url': 'https://placeimg.com/200/100/animals', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 13, 'category': 'cats', 'caption': 'View animals 4', 'url': 'https://placeimg.com/200/100/animals', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 14, 'category': 'cats', 'caption': 'View animals 5', 'url': 'https://placeimg.com/200/100/animals', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 15, 'category': 'books', 'caption': 'View tech 1', 'url': 'https://placeimg.com/200/100/tech', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 16, 'category': 'books', 'caption': 'View tech 2', 'url': 'https://placeimg.com/200/100/tech', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 17, 'category': 'books', 'caption': 'View tech 3', 'url': 'https://placeimg.com/200/100/tech', 'url2': 'https://placeimg.com/900/660/nature'},
  { 'id': 18, 'category': 'books', 'caption': 'View tech 4', 'url': 'https://placeimg.com/200/100/tech', 'url2': 'https://placeimg.com/900/660/nature'}
];
