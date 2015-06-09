
from random import choice

noun = ["fossil", "horse", "aardvark", "judge", "chef", "mango", "extrovert", "gorilla"]
verb = ["kicks", "jingles", "bounces", "slurps", "meows", "explodes", "curdles"]
adjective = ["furry", "balding", "incredulous", "fragrant", "exuberant", "glistening"]
preposition = ["against", "after", "into", "beneath", "upon", "for", "in", "like", "over", "within"]
adverb = ["curiously", "extravagantly", "tantalizingly", "furiously", "sensuously"]

file_name = ""

def makePoem():
    n1 = choice(noun)
    n2 = choice(noun)
    n3 = choice(noun)
    while n1 == n2:#check to make sure that no nouns are used twice
        n2 = choice(noun)
    while n1 == n3 or n2 == n3:
        n3 = choice(noun)

    v1 = choice(verb)
    v2 = choice(verb)
    v3 = choice(verb)
    while v1 == v2
        v2 = choice(verb)
    while v1 == v3 or v2 == v3:
        v3 = choice(verb)
    #make sure that no verbs are used more than once

    adj1 = choice(adjective)
    adj2 = choice(adjective)
    adj3 = choice(adjective)
    #make sure that no adjectives are used more than once

    prep1 = choice(preposition)
    prep2 = choice(preposition)
    #make sure that no prepositions are used more than once

    adv1 = choice(adverb)

    if "aeiou".find(adj1[0]) != -1: #if the first letter in adj1 is a vowel
        article1 = "An" #make article 1 'An'
    else:
        article1 = "A"
    
    if _____: #check to see if adj3 starts with a vowel
    	article3 = #if so, make article3 'an'
    else:
    	article3 = 

    poem = "The %s %s\n" %(adj1, n1)
    poem = poem + "%s %s %s %s %s the %s %s\n" %(article1, adj1, n1, v1, prep1, adj2, n2)
    poem = poem + "%s, the %s %s\n" %(adv1, n1, v2)
    poem = poem + "the %s %s %s %s %s %s.\n" %(n2, v3, prep2, article3, adj3, n3)

    file_path = #where do you want to save the text file?
    text_file = open(file_path, "w")
    text_file.write() #insert the poem to write it to the new file
    return poem

print makePoem()
