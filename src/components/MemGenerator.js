import React from "react"

class MemGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "/images/mem_1.jpg",
      allMemesImg: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.randomImgChoose = this.randomImgChoose.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        let { memes } = response.data;
        this.setState({ allMemesImg: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  randomImgChoose(event){
    event.preventDefault();
    let arrLenght = this.state.allMemesImg.length-1;
    let randomNumber = Math.floor(Math.random() * Math.floor(arrLenght));
    let randomImg = this.state.allMemesImg[randomNumber].url;
    this.setState({ randomImg : randomImg });
}

  render() {
    return (
      <section className="section_meme">
        <form className="meme-form">
          <input
            className="input_meme"
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            className="input_meme"
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button type="button"
                  className="button button_meme"
                  onClick={this.randomImgChoose}>Generate meme</button>
        </form>
        <div className="meme_container">
                    <img className="meme_img" src={this.state.randomImg} alt="meme" />
                    <h2 className="meme_text-top">{this.state.topText}</h2>
                    <h2 className="nene_text-bottom">{this.state.bottomText}</h2>
                </div>
      </section>
    );
  }
}
export default MemGenerator