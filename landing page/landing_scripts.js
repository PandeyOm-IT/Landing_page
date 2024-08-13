// Display the popup when the page loads
window.onload = function() {
    document.getElementById('popup').style.display = 'flex';
}

// Handle star rating click
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = parseInt(this.getAttribute('data-value'));

        // Toggle the selected star
        if (rating === selectedRating) {
            selectedRating = 0;
            document.getElementById('feedback').style.display = 'none';
        } else {
            selectedRating = rating;
            if (rating <= 3) {
                document.getElementById('feedback').style.display = 'block';
            } else {
                window.location.href = "https://maps.app.goo.gl/ug3FfjEBEyQg7cycA";
                document.getElementById('feedback').style.display = 'none';
            }
        }

        // Set the color of the stars based on the selectedRating
        stars.forEach((s, i) => {
            if (i < selectedRating) {
                s.style.color = 'gold';
            } else {
                s.style.color = 'gray';
            }
        });
    });
});

// Close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Submit feedback (you can implement this function as needed)
function submitFeedback() {
    const feedback = document.querySelector('.feedback textarea').value;
    if (feedback) {
        alert('Thank you for your feedback!');
        document.querySelector('.feedback textarea').value = '';
        closePopup();
        window.location.href = "https://www.aneeverse.com";
    } else {
        alert('Please provide your feedback.');
    }
}

$(function(){
    // When a star is clicked
    $('.mdi-star').click(function(){
        var clickedId = $(this).data('value'); // Get the star rating (1 to 5)
        
        // If the clicked star is already selected, deselect it
        if ($(this).hasClass('selected')) {
            $('.mdi-star').removeClass('selected animated tada');
            $('#feedback').fadeOut();
        } else {
            // Remove the selected and animation classes from all stars
            $('.mdi-star').removeClass('selected animated tada');
            
            // Add selected class and animation to the clicked star and all stars before it
            $('.mdi-star').each(function(){
                if($(this).data('value') <= clickedId){
                    var star = $(this);
                    setTimeout(function(){
                        star.addClass('selected animated tada'); // Add animation with a delay
                    }, 75 * parseInt($(this).data('value'))); // Delay increases with star rating
                }
            });

            // Show the feedback section once a star is clicked
            $('#feedback').fadeIn();
        }
    });
});
