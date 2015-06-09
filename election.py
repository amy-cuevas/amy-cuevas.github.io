Enter file contents herefrom random import random
total_wins = 0
for i in range(10000): #Runs the code 10,000 times.
  region_wins = 0
  region_1 = random() #Picks a number between 0 and 1. This number is the probability that you will win in that region.
  if region_1 <= .87: #You win in region 1 if the random function returns a decimal between 0 and .87
    region_wins = region_wins + 1 #Wins are recorded as a variable,region_wins, since it repeats 10,000 times.
  else:
    region_wins = region_wins #Losses have no effect on the variable, since losses do not have a variable.
  region_2 = random() #Each region has their own random probability since votes are independent per region.
  if region_2 <= .65:
    region_wins = region_wins + 1
  else:
    region_wins = region_wins
  region_3 = random()
  if region_3 <= .17:
    region_wins = region_wins + 1
  else:
    region_wins = region_wins
    
  if region_wins >= 2:
    print 
  else:
    print "You did not win the election..."
total_wins = region_wins / 10000
