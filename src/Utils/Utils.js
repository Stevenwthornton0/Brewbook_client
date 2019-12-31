import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Utils/Utils.css';

export function displayPhone(brewery) {
    if (brewery.phone) {
      const phone = brewery.phone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
        return (
            <p className='brewery phone'>
                <FontAwesomeIcon className='logo' icon='phone' />
                {' '}
                {phone}

            </p>
        ) 
    }
    return null
}

export function displayWebsite_1(brewery) {
    if (brewery.website_url) {
      let url = brewery.website_url
      url = url.replace(/(^\w+:|^)\/\//, '');
      url = url.replace('www.', '');
        return (
            <p className='brewery website'>
              <FontAwesomeIcon className='logo' icon='mouse' />
              <span className='url'>{url}</span>
            </p>
        )
    }
    return null
}

export function displayWebsite_2(brewery) {
  if (brewery.website_url) {
    let url = brewery.website_url
    url = url.replace(/(^\w+:|^)\/\//, '');
    url = url.replace('www.', '');
      return (
          <a href={brewery.website_url} target='_blank' rel="noopener noreferrer" className='brewery website_2'>
            <FontAwesomeIcon className='logo' icon='mouse' />
            {' '}
            {url}
          </a>
      )
  }
  return null
}

export function displayType(brewery) {
  if (brewery.brewery_type) {
    let content = brewery.brewery_type.charAt(0).toUpperCase() + brewery.brewery_type.slice(1)
    return (
      <p className='brewery type'>
        <FontAwesomeIcon className='logo' icon='beer' />
        {' '}
        Brewery style: {content}
      </p>
    )
  }
  return null
}

export function displayDirections(brewery) {
  if (brewery.street && brewery.city) {
    const street = brewery.street.replace(/\s/g, '+')
    const zip = brewery.postal_code.slice(0, -5)
    const address = `https://www.google.com/maps/place/${street},+${brewery.city},+${brewery.state},+${zip}`
    return (
      <a href={address} className='brewery address' target='_blank' rel="noopener noreferrer">
        <FontAwesomeIcon className='logo' icon='map-marker' />
        {' '}
        Get directions
      </a>
    )
  }
}

export function Marker(props) {
    const { color, name, } = props;
    return (
        <div className='marker'
            style={{ backgroundColor: color, cursor: 'pointer' }}
            title={name}
        >
            {name}
        </div>
    )
}

export function toSnakeCase(string) {
      let s;
      s = string.replace(/[^\w\s]/g, "");
      s = s.replace(/\s+/g, " ");
      return s.toLowerCase().split(' ').join('_');
    };

export function States() {
    return (
    <select id="state" name="state">
        <option value="---">---</option>
        <option value="Alabama">Alabama</option>
        <option value="Alaska">Alaska</option>
        <option value="Arizona">Arizona</option>
        <option value="Arkansas">Arkansas</option>
        <option value="California">California</option>
        <option value="Colorado">Colorado</option>
        <option value="Connecticut">Connecticut</option>
        <option value="Delaware">Delaware</option>
        <option value="District of Columbia">District of Columbia</option>
        <option value="Florida">Florida</option>
        <option value="Georgia">Georgia</option>
        <option value="Hawaii">Hawaii</option>
        <option value="Idaho">Idaho</option>
        <option value="Illinois">Illinois</option>
        <option value="Indiana">Indiana</option>
        <option value="Iowa">Iowa</option>
        <option value="Kansas">Kansas</option>
        <option value="Kentucky">Kentucky</option>
        <option value="Louisiana">Louisiana</option>
        <option value="Maine">Maine</option>
        <option value="Maryland">Maryland</option>
        <option value="Massachusetts">Massachusetts</option>
        <option value="Michigan">Michigan</option>
        <option value="Minnesota">Minnesota</option>
        <option value="Mississippi">Mississippi</option>
        <option value="Missouri">Missouri</option>
        <option value="Montana">Montana</option>
        <option value="Nebraska">Nebraska</option>
        <option value="Nevada">Nevada</option>
        <option value="New Hampshire">New Hampshire</option>
        <option value="New Jersey">New Jersey</option>
        <option value="New Mexico">New Mexico</option>
        <option value="New York">New York</option>
        <option value="North Carolina">North Carolina</option>
        <option value="North Dakota">North Dakota</option>
        <option value="Ohio">Ohio</option>
        <option value="Oklahoma">Oklahoma</option>
        <option value="Oregon">Oregon</option>
        <option value="Pennsylvania">Pennsylvania</option>
        <option value="Rhode Island">Rhode Island</option>
        <option value="South Carolina">South Carolina</option>
        <option value="South Dakota">South Dakota</option>
        <option value="Tennessee">Tennessee</option>
        <option value="Texas">Texas</option>
        <option value="Utah">Utah</option>
        <option value="Vermont">Vermont</option>
        <option value="Virginia">Virginia</option>
        <option value="Washington">Washington</option>
        <option value="West Virginia">West Virginia</option>
        <option value="Wisconsin">Wisconsin</option>
        <option value="Wyoming">Wyoming</option>
    </select>
    )
}
  
  export function Hyph() {
    return <span className='Hyph'>{' - '}</span>
  }
  
  export function Button({ className, ...props }) {
    return <button className={['Button', className].join(' ')} {...props} />
  }
  
  export function Textarea({ className, ...props }) {
    return (
      <textarea className={['Textarea', className].join(' ')} {...props} />
    )
  }
  
  export function Input({ className, ...props }) {
    return (
      <input className={['Input', className].join(' ')} {...props} />
    )
  }
  
  export function Required({ className, ...props }) {
    return (
      <span className={['Required', className].join(' ')} {...props}>
        &#42;
      </span>
    )
  }
  
  export function Section({ className, list, ...props }) {
    const classes = [
      'Section',
      list && 'Section--list',
      className,
    ].filter(Boolean).join(' ')
    return (
      <section className={classes} {...props} />
    )
  }
  