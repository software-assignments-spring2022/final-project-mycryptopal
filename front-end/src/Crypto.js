import './Crypto.css';

    // https://www.mockaroo.com/docs
    // All these API requests should be "GET" Requests based on the Input
    // Name of clicked Crypto <--- Will be filled in based on results of "GET" Request
    // Price of clicked Crypto <--- Will be filled in based on results of "GET" Request
    // Picture of Crypto <--- Will be filled in based on results of "GET" Request
    // Stock Graph of Crypto <--- Will be filled in based on results of "GET" Request
    // Crypto information <--- Will be filled in based on results of "GET" Request

    // Add a picture of a cryptocurrency to the right of these headers

function Crypto() {
    return (
        <>
        <div id = "page-title">
            <h1> Crypto Analytics </h1>
        </div>
        
        <div id = "page-top-content">
            <div id = "crypto-info" className = "section_top">
            
            <img src = "https://github.com/software-assignments-spring2022/final-project-mycryptopal/blob/master/front-end/imageResources/myCryptoPalLogo.png"  alt = "" id = "cryptoPic" className='cryptoPic'></img>

                <div className = "cryptoStuff">
                    Name of Searched Cryptocurrency
                </div>

                <div className = "cryptoStuff">
                    Price
                </div>

                <div className = "cryptoStuff">
                    Percent Change
                </div>

            </div>
        
        <br></br>

        <div id = "page-mid-content">
            <div id = "crypto-history" className = "section_mid">
                <img src = "https://github.com/software-assignments-spring2022/final-project-mycryptopal/blob/a42e35c3c31566198bd149189c708eaf394ac61c/front-end/imageResources/stockGraph.png" alt = "" className = "stockGraph"></img>

                <div className = "cryptoParagraphTitle">
                    Cryptocurrency Information and History
                </div>

                <div className = "cryptoParagraph">
                    <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>

                </div>
            </div>   
        </div>

        <br></br>

        <div id = "page-bottom-content">
            <div id = "pageBottomHeader" className ="market_header">
                Market Stats
            </div>

            <div id = "market-stats" className = "section_bottom">
                <br></br>

                <div className = "trading_vol">
                    Trading Volume: Volume
                </div>

                <div className = "market-cap">
                    Market Cap: Market Cap
                </div>

                <div className = "Supply">
                    Circulating Supply: Supply
                </div>    
            </div>
        </div>

        <div id = "buttons">
            <input id = "addButton" onClick = {addCrypto} type = "button" value = "Add Crypto" className = "add_crypto_button"></input>
            <input id = "dropButton" onClick = {dropCrypto} type = "button" value = "Drop Crypto" className = "drop_crypto_button"></input>
        </div>
        

        </div>
        </>

    )     
}

function addCrypto() {
    // fetch cry name from mockaroo
    alert("You have added {GET crypto name} to your watchlist!")
}

function dropCrypto() {
    // fetch crypto name from mockaroo
    alert("You have removed {GET crypto name} from your watchlist.")
}
export default Crypto;