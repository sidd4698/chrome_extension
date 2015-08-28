walk(document.body);

    function walk(node) 
    {var child, next;

        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;

            case 3: // Text node
                handleText(node);
                break;
            default:
                break;
        }
    }

    function handleText(textNode) 
    {
        var text = textNode.nodeValue;

        text = text.replace(/programming/g, "glassblowing");
        text = text.replace(/Programming/g, "Glassblowing");
        text = text.replace(/PROGRAMMING/g, "GLASSBLOWING");

        text = text.replace(/TRUMP/g, "DUCK");
        text = text.replace(/Trump/g, "Duck");

        text = text.replace(/\bHacker\b/g, "Pooper");
        text = text.replace(/\bhacker\b/g, "pooper");
        text = text.replace(/\bHACKER\b/g, "HACKER");
        
        textNode.nodeValue = text;
    }