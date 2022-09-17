import '../style.css'

const About = () => {
  return (
    <div className="fragment">
      <div id="all_but_footer">
        <div id="content">
          <h2>About</h2>
          <div
            className="container container_small"
            style={{margin: '20px 0 20px'}}
          >
            <h3>Team</h3>
            <div>
              <div className="img_one_wrapper" style={{textAlign: 'center'}}>
                <a href="https://twitter.com/smolgrrr">
                  <img className="pfp" src="/smolgrrr.jpeg" />
                  <p>
                    <strong>bear</strong>
                  </p>
                  <p>lead/dev</p>
                </a>
              </div>
              <div
                className="img_one_wrapper"
                style={{
                  textAlign: 'center',
                  paddingRight: '10px',
                  paddingLeft: '10px',
                }}
              >
                <a href="https://twitter.com/smolgainzy">
                  <img className="pfp" src="/smolgainzy.jpeg" />
                  <p>
                    <strong>SmolGainzy</strong>
                  </p>
                  <p>dev</p>
                </a>
              </div>
              <div
                className="img_one_wrapper"
                style={{textAlign: 'center', paddingRight: '10px'}}
              >
                <a href="https://twitter.com/smol_fed">
                  <img className="pfp" src="/smolFED.jpeg" />
                  <p>
                    <strong>Agent Smol</strong>
                  </p>
                  <p>dev</p>
                </a>
              </div>
              <div className="img_one_wrapper" style={{textAlign: 'center'}}>
                <a href="https://twitter.com/smolmooo">
                  <img className="pfp" src="/smolmooo.jpeg" />
                  <p>
                    <strong>bull</strong>
                  </p>
                  <p>product/fulfilment</p>
                </a>
              </div>
              <br /> <br /> <br />
              <p>
                Honourable mentions:{' '}
                <a href="https://twitter.com/smolspartan">smol degen</a>,{' '}
                <a href="https://twitter.com/enjoyoor">mike three</a>
              </p>
            </div>
          </div>
          <div
            className="container container_large"
            style={{margin: '10px 0 10px'}}
          >
            <h3>Inspired by Silk Road and Ross's philosophy</h3>
            <br />
            <p>
              Honeyroad is inspired by the idea of open marketplaces.
              <br />
              Silkroad exemplified this philosophy, and through amazing
              innovation, opened up the peaceful trade of many goods usually
              tainted by violence and fraud, or restricted by institutions.
              <br />
              Ross wanted "a website where people could buy anything
              anonymously, with no trail whatsoever that could lead back to
              them". Silkroad would "use economic theory as a means to abolish
              the use of coercion and aggression amongst mankind"
              <br />
              <br />
              Open, unrestricted markets with means of anonymity have never been
              more important. <br /> <br />
              Please donate to <a href="https://freeross.org/">
                freeross.org
              </a>{' '}
              and help get clemency for Ross- he does not deserve incarceration
              for life.
            </p>

            <br />
            <h3>VIA</h3>
            <p>
              <br />
              "VIA", infrastructure for agora.
              <br />
              <br />
              "The goal of agorism is the agora. The society of the open
              marketplace as near to untainted by theft, assault, and fraud as
              can be humanly attained is as close to a free society as can be
              achieved. And a free society is the only one in which each and
              every one of us can satisfy his or her subjective values without
              crushing others' values by violence and coercion."
              <br />
              — Samuel Edward Konkin III
              <br />
              <br />
              Open marketplaces circumvent the state/institution's control over
              voluntary exchanges between people.
              <br />
              Replicate the handshake trade and peer-to-peer nature of the
              flea/farmers' market online.
              <br />
              Disintermediate Amazon, Shopify, etc
              <br />
              <br />
              1) Merchant facing marketplace
              <br />
              2) Merchant reputation network
            </p>
          </div>
          <div
            className="container container_small"
            style={{margin: '20px 0 20px'}}
          >
            <h3 id="support">Support</h3>
            <br />
            <p>
              <strong>Refunds?</strong> Unfortunately we don't refund unlucky
              buyers- however if you do have any issues <br /> please dm
              @smolgrrr on twitter or email smolgrrr@honeyroad.store with your
              problem
            </p>
            <br />
            <p>
              <strong>I haven't used bitscoin before?</strong> download muun
              wallet, i recommend bybit for cheap withdraw fees but you can
              compare{' '}
              <a href="https://withdrawalfees.com/coins/bitcoin">here.</a>{' '}
              <br /> pay from muun for best experience or straight from the
              exchange.
            </p>
            <br />
            <p>
              <strong>
                What happens with my data on here and when ordering over Tor
                with PGP?
              </strong>{' '}
              we try to limit the data collected for your order to the bare
              minimum required for fulfillment. <br />
              your invoice information and pgp hash is secured on my personal
              btcpay server only. <br />
              completed order data is removed 30-days after fulfilment. pgp data
              is only decrypted on my local machine for the shipping label. that
              data is then deleted and the invoice is deleted from btcpay{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
