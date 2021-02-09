

const data = [
  {
    id: '1',
    name: "Schloss Neuschwanstein",
    serie: "Bundesländerserie Bayern",
    land: "Deutschland",
    date: "2012",
    picture:"./img/Deutschland_bayern_2012.jpg"
  },
  {
    id: '2',
    name: "Rathaus und Roland",
    serie: "Bundesländerserie Bremen",
    land: "Deutschland",
    date: "2010",
    picture:"./img/Deutschland_bremen_2010.jpg"
  }, {
    id: '3',
    name: "Kloster Maulbronn",
    serie: "Bundesländerserie Baden Würtemberg",
    land: "Deutschland",
    date: "2013",
    picture:"./img/Deutschland_badenwürtemberg_2013.jpg"
  }, {
    id: '4',
    name: "St. Michaeliskirche",
    serie: "Bundesländerserie Hamburg",
    land: "Deutschland",
    date: "2008",
    picture:"./img/Deutschland_hamburg_2008.jpg"
  }, {
    id: '5',
    name: "Paulskirche in Frankfurt",
    serie: "Bundesländerserie Hessen",
    land: "Deutschland",
    date: "2015",
    picture:"./img/Deutschland_hessen_2015.jpg"
  }, {
    id: '6',
    name: "Holstentor",
    serie: "Bundesländerserie Schleswig Holstein",
    land: "Deutschland",
    date: "2006",
    picture:"./img/Deutschland_schleswigholstein_2006.jpg"
  }, {
    id: '7',
    name: "St. Michaeliskirche in Hildesheim",
    serie: "Bundesländerserie Niedersachsen",
    land: "Deutschland",
    date: "2016",
    picture:"./img/Deutschland_niedersachsen_2015.jpg"
  }, {
    id: '8',
    name: "Porta Nigra in Trier",
    serie: "Bundesländerserie Rheinland-Pfalz",
    land: "Deutschland",
    date: "2017",
    picture:"./img/Deutschland_rheinland-pfalz_2017.jpg"
  }, {
    id: '9',
    name: "Ludwigskirche in Saarbrücken",
    serie: "Bundesländerserie Saarland",
    land: "Deutschland",
    date: "2009",
    picture:"./img/Deutschland_saarland_2009.jpg"
  }, {
    id: '10',
    name: "Schloss Charlottenburg",
    serie: "Bundesländerserie Berlin",
    land: "Deutschland",
    date: "2018",
    picture:"./img/Deutschland_berlin_2018.jpg"
  }, {
    id: '11',
    name: "Dresdner Zwinger",
    serie: "Bundesländerserie Sachsen",
    land: "Deutschland",
    date: "2016",
    picture:"./img/Deutschland_sachsen_2016.jpg"
  }, {
    id: '12',
    name: "Schweriner Schloss",
    serie: "Bundesländerserie Mecklenburg Vorpommern",
    land: "Deutschland",
    date: "2007",
    picture:"./img/Deutschland_mecklenburgvorpommern_2007.jpg"
  }
];

const Muenze = (props) => {
  return (
    <div className="card">
      <div>
        <img src={props.picture} alt={props.name} />
      </div>
      <h2>{ props.name }</h2>
      <p><strong>{ props.land }</strong></p>
      <hr/>
      <p> { props.serie }</p>
      <hr/>
      <p> { props.date }</p>
    </div>
  );
}

const CoinList = (props) => {
  return (
    <div className="container">
      {props.data.map( coinz => 
        <Muenze
          {...coinz}
          key={coinz.id}
        />      
      )}
    </div>
  );
}

// 3: Render the container component to the DOM
ReactDOM.render(
  <CoinList data={data} />,
  document.getElementById('root')
);