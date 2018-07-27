import './styles/index.scss';

let data = {};

const loadData = () => {
    $.ajax({
        dataType: 'json',
        url: 'config/data.json',
        success: (res) => {
            data = res;
            createComponents();
        }
    });
};

const createComponents = () => {
    console.log('DATA', data.data[0].title);
};

document.addEventListener('DOMContentLoaded', () => loadData());
