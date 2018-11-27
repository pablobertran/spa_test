import Component from "./Component.js";

class HelpInfo extends Component {
  render() {
    return `<div class="flex-content" id="${this.id}">
              <div class="help">
                  <div class="help__title">Help <a class="help__title-toggle closed"></a></div>
                  <div class="help__content closed">
                      <i class="fas fa-life-ring"></i>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra vulputate sem at
                          efficitur. Morbi vulputate fermentum ligula, ac tristique justo cursus at. Nunc felis sapien,
                          sagittis sit amet euismod a, elementum a justo. Etiam eleifend nisl id justo vulputate, et
                          rutrum justo auctor. Fusce vel elit ante. Pellentesque lobortis mi ac faucibus dapibus. Sed
                          sagittis ipsum ac urna volutpat, in fermentum sem suscipit. Nunc malesuada elit quis dui
                          pharetra tincidunt. Nunc eget arcu a diam blandit cursus. Phasellus tristique massa sed
                          condimentum porttitor. Vivamus viverra ac nisi et pharetra. Phasellus faucibus felis dolor, sit
                          amet laoreet nisl ultricies nec. In sodales, elit lobortis iaculis porttitor, ante urna ultrices
                          metus, et lacinia lectus enim eu nunc. Ut gravida lorem quis dapibus mattis.</p>

                      <p>Nunc molestie leo vitae nulla rhoncus, vitae interdum neque elementum. Nam non tortor egestas,
                          egestas ligula eu, fermentum nulla. Vivamus id lacinia magna. Cras eget pharetra quam, posuere
                          varius metus.</p>
                  </div>
              </div>
          </div>`;
  }
  afterRender() {
    const element = document.getElementById(this.id);

    element
      .querySelector(".help__title-toggle")
      .addEventListener("click", e => {
        element.querySelector(".help__title-toggle").classList.toggle("closed");
        element.querySelector(".help__content").classList.toggle("closed");
      });
  }
}

export default HelpInfo;
