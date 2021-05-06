import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/index';

import virusImage from './images/image.png';

class App extends React.Component {
    state = {
        data: {},
        country: ''
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        console.log(fetchedData);
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
    }

    render() {
        const { data, country } = this.state;
        return (
            <>
                <div className={styles.container}>
                    <img className={styles.image} src={virusImage} alt="COVID-19" />
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                    <div className={styles.footer}>
                        <p className={styles.footerPara}>Developer: Lakshya Parashar</p>
                    </div>
                </div>
            </>
        )
    }
}

export default App;
