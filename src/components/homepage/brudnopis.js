//defaultowe rozwiązanie

class Uploadimage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            images: [],
        };

        this.fileReader = new FileReader();
    }

    setImages = (e) => {
        e.preventDefault();
        let self = this; // unsure if this is needed
        self.setState({ images: [] }); // empty out current images array
        const imageFiles = e.target.files; // document.getElementById("image"); // You may want to avoid querying the dom yourself, try and rely on react as much as possible
        const filesLength = imageFiles.length; // imageFiles.files.length;
        // const temp = null;

        for (var i = 0; i < filesLength; i++) {
            let reader = new FileReader();
            let file = imageFiles[i];

            reader.onloadend = () => {
                self.setState({ images: self.state.images.concat(reader.result); });
            }

            reader.readAsDataURL(file);
        }
    }

    render() {
        let { images } = this.state;
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <Input id="image" type="file" multiple defaultValue='no file chosen' onChange={this.setImages} />
                    <Button icon='upload' type="submit" onClick={this._handleSubmit}>Upload Image</Button>
                </form>
                {images.map((item, index) => <img src={item} />)}
            </div>
        )
    }
}

//pobieranie wielu zdjęć

class Uploadimage extends Component {
    state = {
        file: '',
        images: [],
    };

    fileReader = new FileReader();


    setImages = (e) => {
        e.preventDefault();
        let self = this; // unsure if this is needed
        self.setState({ images: [] }); // empty out current images array
        const imageFiles = e.target.files; // document.getElementById("image"); // You may want to avoid querying the dom yourself, try and rely on react as much as possible
        const filesLength = imageFiles.length; // imageFiles.files.length;
        // const temp = null;

        for (var i = 0; i < filesLength; i++) {
            let reader = new FileReader();
            let file = imageFiles[i];

            reader.onloadend = () => {
                self.setState({ images: self.state.images.concat(reader.result) });
            }

            reader.readAsDataURL(file);
        }
    }

    render() {
        let { images } = this.state;
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                    <input id="image" type="file" onChange={this.setImages} />
                </form>
                {images.map((item) => <img src={item} />)}
            </div>
        )
    }
}

export default Uploadimage;

//pobieranie jednego zdjęcia


class Uploadimage extends Component {
    state = {
        image: [],
    };


    setImage = (data) => {

        data.preventDefault();

        const imageFiles = data.target.files;

        let reader = new FileReader();
        let file = imageFiles[0];

        reader.onloadend = () => {
            this.setState({ image: this.state.image.concat(reader.result) });
        }

        reader.readAsDataURL(file);
    }

    render() {
        const { image } = this.state;

        return (
            <div>
                <form>
                    <input id="image" type="file" onChange={this.setImage} />
                </form>
                <img src={image} />)}
            </div>
        )
    }
}

export default Uploadimage;