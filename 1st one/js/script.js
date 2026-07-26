// script to render a small profile card inside #playground using D3
function resetPlayground() {
    d3.select('#playground').html('');
}

function renderProfileCard(opts = {}) {
    resetPlayground();

    const data = {
        img: opts.img || 'profile.jpg',
        placeholder: opts.placeholder || 'https://via.placeholder.com/150',
        name: opts.name || 'Your Name',
        experienceLabel: opts.experienceLabel || '3 years'
    };

    const container = d3.select('#playground');

    const card = container.append('div').attr('class', 'profile-card');

    card.append('img')
        .attr('class', 'profile-avatar')
        .attr('src', data.img)
        .attr('alt', 'Profile picture')
        .on('error', function() { d3.select(this).attr('src', data.placeholder); });

    card.append('h1')
        .attr('class', 'profile-name')
        .text(data.name);

    const sentence = `Frontend Developer with <strong>${data.experienceLabel}</strong> of experience.`;
    card.append('p')
        .attr('class', 'profile-bio')
        .html(sentence);

    card.append('div').attr('class', 'muted').text('(Your role or location)');
}

// render on load with defaults
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => renderProfileCard());
} else {
    renderProfileCard();
}
