package uet.japit.k62.models.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Data
public class Event extends BaseEntity{
    private String name;
    private String description;
    private String coverImageUrl;
    private String mapImageUrl;
    private Date startTime;
    private Date endTime;
    private Date startSellingTime;
    private Date endSellingTime;
    private Boolean isPopular;
    private Boolean isBroadcasting;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToMany(mappedBy = "eventList")
    private Collection<Location> locationList = new ArrayList<Location>();

    @OneToMany(mappedBy = "event")
    private Collection<TicketClass> ticketClasses = new ArrayList<TicketClass>();

    @OneToMany(mappedBy = "event")
    private Collection<Booking> bookings = new ArrayList<Booking>();

}
