const Map = props => {
  return (
    <div className="fragment">
      <div id="all_but_footer">
        <div id="content">
          <iframe
            id="btcmap"
            title="BTC Map"
            width="100%"
            height="600vw"
            allowfullscreen="true"
            src="https://btcmap.org/map"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Map
