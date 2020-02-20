
import React,{Component} from 'react';

import Faq from './Faq';

import './Faqs.css';


class Faqs extends Component {
  constructor(props) {
    super(props);
    this.state = { faqs: [], error: "" };
  }


   toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  async componentDidMount() {
    getFaqs= async () => {
      try {
        const response = await fetch("http://localhost:8080/faqs");
        const result = await response.json();
        
        if (result.success) {
          this.setState({ faqs: result.result, error: "" });
        } else {
          this.setState({ error: result.message });
        }
      } catch (err) {
        this.setState({ error: err });
      }
    };
  }

render(){
  return (
    <div className="App">
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
        }
}

export default Faqs ;
