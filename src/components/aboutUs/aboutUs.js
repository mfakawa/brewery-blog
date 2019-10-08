import React, { Component } from 'react';
import './aboutUs.scss';
import Team from './img/team.jpg';


class AboutUs extends Component {

    componentDidMount = () => {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div id="about-us">
                <div id="about-us-top" className="jumbotron jumbotron-fluid m-0 p-0">
                    <div id="about-us-top-title" className="row h-100 m-0">
                        <div className="col my-auto">
                            <h1 className="display-3 font-weight-bold font-italic text-center text-white">Pasja, która łączy</h1>
                        </div>
                    </div>
                </div>
                <blockquote className="container pb-lg-5 my-5 mt-md-0 mx-auto">
                    <div>
                        <p className="lead text-secondary">"Najsmutniejsi ludzie, jakich w życiu spotkałam, to ci, którzy nie interesują się niczym głęboko. Pasja i zadowolenie idą ze sobą w parze, a bez nich każde szczęście jest wyłącznie chwilowe, nie ma bowiem bodźca, który by je podtrzymywał."</p>
                        <p className=" lead text-right font-italic">Nicholas Sparks</p>
                    </div>
                </blockquote>
                <div id="about-us-content">
                    <div className="jumbotron jumbotron-fluid mb-2 shadow-sm">
                        <div className="row mx-0">
                            <div className="col-xl-3"></div>
                            <div id="about-us-content-title" className="col-xl-9 px-5">
                                <h1 className="font-weight-bold" >Jesteśmy grupą przyjaciół, która przeżyła już nie jedno...</h1>
                            </div>
                        </div>
                    </div>
                    <div id="about-us-content-background">
                        <div className="row px-0 mx-3 mx-xl-5 ">
                            <div id="img" className="col-md-4 col-lg-3 px-4">
                                <img src={Team} alt="our team" />
                            </div>
                            <div className="col-md-7 col-lg-8 pr-xl-5 mt-4 pb-4 border-right border-dark border-bottom border-dark">
                                <p className="lead text-justify mb-4">Większość z nas poznała się na studiach, gdzie jak wiadomo, studenckie życie nie podlega tylko i wyłącznie nauce ale jakże istotnym aspektem jest typowe „studenckie życie”, czyli wszelkiego rodzaju imprezy z alkoholem w roli głównej.</p>
                                <p className="lead text-justify mb-4"> Za czasów tych pijackich posiedzeń, szczerze powiedziawszy, raczej nikt z nas nie zwracał specjalnej uwagi na inne walory niż cenowe alkoholu.  Interesowały nasz opcje ekonomiczne i żeby dobrze kopały. Jak to mówią, „biedny student”, na jedzenie i książki nie ma, ale na alkohol zawsze coś się znajdzie. Nie zrozumcie nas źle – nie było tak, że każdy pił co popadnie. Aż tak nisko na szczęście nie upadliśmy. Już wtedy zaczęły się pojawiać pierwsze eksperymenty, żeby kupić piwo „z górnej półki”, czyli zazwyczaj takie z mniej znaną etykietą lub nazwą. To tyczyło się również mocniejszych mocniejszych trunków, jak whisky czy wódka, żeby nie robić co spotkanie studenckie popijawy z dobrze znanymi kombinacjami czarnych drinków.</p>
                                <p className="lead text-justify mb-4"> Właśnie te eksperymenty stały się podwalinami naszych późniejszych i częstszych zakupów różnego rodzaju piw, głównie kraftowych jak i nowych rodzajów whisky, burbonów i innych trunków. Nie uznajemy się za specjalistów z milionem certyfikatów, ale w temacie degustacji alkoholu jednak najbliższe naszemu sercu będą piwa kraftowe.</p>
                                <p className="lead text-justify mb-4"> W blogu który właśnie odwiedzacie, chcemy się podzielić z Wami naszymi spostrzeżeniami i opiniami na temat piwa i wszelkich rzeczy z piwem związanymi. Spokojnie, na inne trunki też znajdzie się tutaj miejsce.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center m-0">
                            <div className="col-xl-10 p-xl-3 pb-xl-5 ">
                                <h1 className="text-center p-5">Mamy nadzieję, że zechcecie towarzyszyć nam w podróży odkrywającej wszystkie twarze krafta</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;