import React, { Component } from 'react';
import config from '../../config'
import TokenService from '../../services/token-service'
import EventBriteList from '../../components/EventBriteList/EventBriteList'
import JobReelContext from '../../context/JobReelContext'
import { Input, Label } from '../../components/Form/Form'
import Button from '../../components/Button/Button'
import Select from 'react-select';

const categoryOptions = [
    { value: '101', label: 'Business & Professional' },
    { value: '102', label: 'Science & Technology' },
    { value: '103', label: 'Music' },
    { value: '104', label: 'Film, Media & Entertainment' },
    { value: '105', label: 'Performing & Visual Arts' },
    { value: '106', label: 'Fashion & Beauty' },
    { value: '107', label: 'Health & Wellness' },
    { value: '108', label: 'Sports & Fitness' },
    { value: '109', label: 'Travel & Outdoor' },
    { value: '110', label: 'Food & Drink' },
    { value: '111', label: 'Charity & Causes' },
    { value: '112', label: 'Government & Politics' },
    { value: '113', label: 'Community & Culture' },
    { value: '114', label: 'Religion & Spirituality' },
    { value: '115', label: 'Family & Education' },
    { value: '116', label: 'Seasonal & Holiday' },
    { value: '117', label: 'Home & Lifestyle' },
    { value: '118', label: 'Auto, Boat & Air' },
    { value: '119', label: 'Hobbies & Special Interest' },
    { value: '120', label: 'School Activities' },
    { value: '199', label: 'Other' },
];


const subcategoryOptions = [
    { value: 'it', label: 'IT' },
    { value: 'finance', label: 'Finance' },
    { value: 'management', label: 'Management' },
    { value: 'sales', label: 'Sales' },
    { value: 'legal', label: 'Legal' },
    { value: 'support', label: 'Support' },
    { value: 'hr', label: 'HR' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'communication', label: 'Communication' },
    { value: 'executive', label: 'Executive' }
];


const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted black',
        color: state.isSelected ? 'red' : 'blue',
        height: 100,
        padding: 20,
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}

export default class EventBriteSearches extends Component {

    state = {
        error: null,
        query: '',
        category: '',
        location: '',
        subcategoryOptions: [],
        subcategory: '',
    }

    static contextType = JobReelContext

    updateQuery(query) {
        this.setState({ query });
    }

    updateLocation(location) {
        this.setState({ location });
    }

    updateCategory(category) {
        this.setState({ category });
        console.log(this.state.category)
    }


    handleSearch = (e) => {
        e.preventDefault();
        let query = 'javascript';
        if (this.state.query) {
            query = e.target['query'].value;
        }
        let location = 'san diego';
        if (this.state.location) {
            location = e.target['location'].value;
        }
        let category = '';
        if (this.state.category) {
            category = e.target['category'].value;
        }
        let subcategory = '';
        if (this.state.subcategory) {
            subcategory = e.target['subcategory'].value;
            console.log(subcategory)
        }
        // const limit = e.target['limit'].value;
        this.context.setProfessionalsSearch({ query, location, category, subcategory })
        setTimeout(() => {
        const search =  this.context.professionalsSearch
        fetch(`${config.API_ENDPOINT}/eventbrite/events`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({
                search,
            }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(data => {
                if (data.pagination.object_count < 51) {
                    this.context.setEvents(data.events)
                }
                console.log(data)
                console.log(this.context)
                this.props.history.push(`/eventbriteevents`)
            })
        }, 500)
    }

    handleChange = categoryValue => {
        this.setState({ category: categoryValue });
        console.log(categoryValue)
        setTimeout(() => {
            console.log(this.state)
            if (this.state.category) {
                const category = { id: categoryValue.value }
                fetch(`${config.API_ENDPOINT}/eventbrite/categoriesbyID`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${TokenService.getAuthToken()}`,
                    },
                    body: JSON.stringify({
                        category,
                    }),
                })
                    .then(res =>
                        (!res.ok)
                            ? res.json().then(e => Promise.reject(e))
                            : res.json()
                    )
                    .then(data => {
                        this.formatSubcategories(data.subcategories)
                    })
            }
        }, 500)
    };

    handleSubChange = subCategoryValue => {
        this.setState({ subcategory: subCategoryValue });
        console.log(subCategoryValue)
    };

    formatSubcategories(subcategories) {
        const subcategoryOptions = []
        subcategories.map(resource => {
            return (
                subcategoryOptions.push({ value: resource.id, label: resource.name })
            )
        })
        this.setState({ ...this.state.subcategoryOptions, subcategoryOptions });
    }


    renderForm() {
        const { category } = this.state;
        const { subcategory } = this.state;
        return (
            <form className='JobSearchForm' onSubmit={this.handleSearch}>
                <h4>Search for Events</h4>
                <div>
                    <Label htmlFor='query'>Search Events</Label>
                    <br />
                    <Input
                        type='text'
                        name='query'
                        id='query'
                        placeholder='Search events...'
                        required
                        value={this.state.query}
                        onChange={e => this.updateQuery(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor='location'>Location</Label>
                    <br />
                    <Input
                        type='text'
                        name='location'
                        id='location'
                        placeholder='Location...'
                        required
                        value={this.state.location}
                        onChange={e => this.updateLocation(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor='category-input'>
                        Category
                        </Label>
                    <br />
                    <Select
                        styles={customStyles}
                        makeAnimated
                        name="category"
                        id="category-input"
                        options={categoryOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        defaultValue={{ label: "Optionally Select Category", value: ''}}
                        value={category}
                        onChange={this.handleChange}
                    />
                </div>
                <br />
                {this.state.category && <div>
                    <Label htmlFor='category-input'>
                        SubCategory
                        </Label>
                    <br />
                    <Select
                        styles={customStyles}
                        makeAnimated
                        isMulti
                        name="subcategory"
                        id="subcategory-input"
                        options={this.state.subcategoryOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        value={subcategory}
                        onChange={this.handleSubChange}
                    />
                </div>}
                <br />
                <Button type="submit">Submit</Button>
            </form>
        )
    }



    render() {
        return (
            <>
                {this.renderForm()}
            </>
        );
    }
}