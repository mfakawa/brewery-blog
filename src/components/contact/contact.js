import React, { Component } from 'react';
import './contact.scss';


class Contact extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="contact">
                <div id="contact-top">
                    <div id="contact-top-title" className="row h-100 m-0">
                        <div className="col my-auto">
                            <h1 className="display-3 font-weight-bold font-italic text-center text-white">Bądźmy w kontakcie</h1>
                        </div>
                    </div>
                </div>
                <div id="contact-content" className="jumbotron jumbotron-fluid bg-transparent mt-5 mt-md-0 mx-3 p-3 mx-sm-4 p-sm-4 mx-md-5 p-md-5 border-top border-bottom border-dark">
                    <p className="lead mb-4 mb-md-5 text-center">Chciałbyś rozpocząć z nami współpracę? Dowiedzieć się więcej na temat domowej produkcji piwa lub pochwaliś się swoimi wyrobami? A może skontaktować się w zupełnie innej sprawie? Napisz do nas!</p>
                    <h2 className="mx-auto text-center"><a className=" text-dark" href="https://accounts.google.com" rel="noopener noreferrer">piedziesiattwarzykrafta@gmial.com</a></h2>
                </div>
            </div>
        );
    }
}

export default Contact;