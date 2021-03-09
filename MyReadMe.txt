I may be slow sometimes but I never give up!

Here is the test from yesterday done in angular

The word count is listed to the console and also to the display page
It may be sorted alphabetically or by word frequency by commenting out a specific line in the code.
Minimal unit tests have been written.

Analysis:
1. The reason that the last word was not being added to the list was because the substring was looking for a space character
and none were at the end of the string. Easy fix - concat a space character on the end.
2. Multiple spaces (e.g. '   the quick   brown     fox    ') anywhere in the string could confuse the substring function.
I switched to a simple character traversal that would ignore multiple spaces.
3. I didn't ask whether the comparison should be case sensitive or not. It was a question that was obvious once I slowed 
down.
4. I didn't ask if the result should be sorted. Another obvious question.

Next steps:
1. Add user input field with constant string as default
2. Add radio buttons for sort order (none, alphabetically, frequency);
3. Add checkbox for case sensitive comparison.
4. Add more tests.

Make it better:
1. Convert to reactive form to include inputs

Overkill:
1. Include a data store like NgRx

Thanks for your time. I hope this helps give me a fair evaluation.

J.

