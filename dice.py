Enter file contents herefrom random import randint 
 trials = 500 
 tracker = {2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0, 12:0} 
 
 
 for i in range(trials): 
     roll = randint(1,6) + randint(1,6) 
     tracker[roll] = tracker[roll] + 1 
 
 
 for combination in tracker: 
     print "%s rolled %s times out of %." %(combination, tracker[combination], trials) 
     prob = float(tracker[combination])/trials 
     percent = prob*100 
     print "This is a probability of %s, or %s percent!" %(prob, percent) 
