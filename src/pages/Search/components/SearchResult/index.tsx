import React from 'react';
import './style.scss';
import GithubImage from '../../../../assets/images/github-mark.png';


type Props = {
    image: string;
    name: string;
    location: string;
    blog: string;
}

const SearchResult = ({ image, name, location, blog }: Props) => (

    <div className="searchresult-content">
        <h1 className="search-text-title">
            <img
                src={image}
                className="responsive"
                alt=""
                height="200px"
            />
            <h1 className="pt-5">
                <a href="https://github.com/oraeduardo" target="_new">
                    {name}
                </a>
            </h1>
            <h3>{location}</h3>
            <p>
                <a href={blog} target="_new" className="text-info">
                    {blog}
                </a>
            </p>
        </h1>
    </div>

)

export default SearchResult;