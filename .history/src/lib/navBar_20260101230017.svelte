<script>
    // ... lahat ng existing code mo ...

    let prevScrollY = 0;
    let navbarVisible = true;

    onMount(() => {
        const handleScroll = () => {
            scrolled = window.scrollY > 50;

            const currentScrollY = window.scrollY;

            // Hide navbar kapag nag-scroll pababa, show kapag paitaas
            if (currentScrollY > prevScrollY && currentScrollY > 100) {
                navbarVisible = false;
            } else if (currentScrollY < prevScrollY) {
                navbarVisible = true;
            }

            // Always show kapag nasa pinakatop na
            if (currentScrollY <= 10) {
                navbarVisible = true;
            }

            prevScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        // ... yung existing IntersectionObserver code mo ...

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    });
</script>