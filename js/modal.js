// modal.js
export default class Modal {
  constructor() {
    this.modal = document.createElement('div');
    this.modal.style.display = 'none';
    this.modal.style.position = 'fixed';
    this.modal.style.zIndex = '1';
    this.modal.style.left = '0';
    this.modal.style.top = '0';
    this.modal.style.width = '100%';
    this.modal.style.height = '100%';
    this.modal.style.overflow = 'auto';
    this.modal.style.backgroundColor = 'rgba(0,0,0,0.4)';

    this.modalContent = document.createElement('img');
    this.modalContent.style.margin = 'auto';
    this.modalContent.style.display = 'block';
    this.modalContent.style.width = '60%';
    this.modalContent.style.maxWidth = '700px';

    this.closeButton = document.createElement('span');
    this.closeButton.innerHTML = '×';
    this.closeButton.style.position = 'absolute';
    this.closeButton.style.top = '15px';
    this.closeButton.style.right = '35px';
    this.closeButton.style.color = '#f1f1f1';
    this.closeButton.style.fontSize = '40px';
    this.closeButton.style.fontWeight = 'bold';
    this.closeButton.style.transition = '0.3s';
    this.closeButton.onmouseover = () => { this.closeButton.style.color = 'black'; }
    this.closeButton.onmouseout = () => { this.closeButton.style.color = 'white'; }
    this.closeButton.onclick = () => { this.closeModal(); }

    this.modal.appendChild(this.modalContent);
    this.modal.appendChild(this.closeButton);
    document.body.appendChild(this.modal);
  }

  showModal(imgSrc) {
    this.modalContent.src = imgSrc;
    this.modal.style.display = 'block';
  }

  closeModal() {
    this.modal.style.display = 'none';
  }
}
